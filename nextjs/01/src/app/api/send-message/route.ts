/**
 * This TypeScript function handles the POST request to send a message to a user, checking if the user
 * exists and is accepting messages before saving the new message.
 * @param {Request} request - The `request` parameter in your code represents the incoming HTTP request
 * that triggers this function. It contains information about the request such as headers, body,
 * method, and other details. In this case, you are expecting a POST request with JSON data containing
 * `username` and `content`.
 * @returns The code is returning a JSON response with a success message based on the outcome of the
 * message sending process. If the user is not found, it returns a 404 status with a message "user not
 * found". If the user is not accepting messages, it returns a 403 status with a message "user is not
 * accepting messages". If the message is successfully sent, it returns a 201 status with
 */

import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();

  const { username, content } = await request.json();

  try {
    const user = await UserModel.findOne({ username }).exec();

    if (!user) {
      return Response.json(
        { message: "user not found ", success: false },
        { status: 404 }
      );
    }

    if (!user.isAcceptingMessages) {
      return Response.json(
        { message: "user is not accepting messages", success: false },
        { status: 403 }
      );
    }

    const newMessage = { content, createdAt: new Date() };

    user.messages.push(newMessage as Message);

    user.messages.push(newMessage as Message);
    await user.save();

    return Response.json(
      { message: "message sent", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error adding message ", error);
    return Response.json(
      { message: "error adding message", success: false },
      { status: 500 }
    );
  }
}
