import { createUser } from "@/lib/actions/user.actions";
import { WebhookEvent } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request): Promise<Response> {
  const svix_id = req.headers.get("svix-id") ?? "";
  const svix_timestamp = req.headers.get("svix-timestamp") ?? "";
  const svix_signature = req.headers.get("svix-signature") ?? "";

  if (!process.env.WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not set");
    return new Response("Internal Server Error", { status: 500 });
  }

  let payload;
  try {
    payload = await req.json();
  } catch (err) {
    console.error("Failed to parse JSON payload:", err);
    return new Response("Bad Request", { status: 400 });
  }

  const body = JSON.stringify(payload);
  const svix = new Webhook(process.env.WEBHOOK_SECRET);
  let msg: WebhookEvent;

  try {
    msg = svix.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Bad Request", { status: 400 });
  }

  const eventType = msg.type;
  console.log("Received event type:", eventType);

  if (eventType === "user.created") {
    const { id, username, email_addresses , image_url} = msg.data;

    const user =  await createUser({
      clerkId : id,
      username : username!,
      email : email_addresses[0].email_address,
      avatar : image_url
    });

    return NextResponse.json({
      message : "OK",
      user : user
    })
  }

  return new Response("OK", { status: 200 });
}
