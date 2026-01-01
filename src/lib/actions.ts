'use server'

import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function updateMusicianProfile(formData: FormData) {
  const session = await auth();

  // GATE: Check if user is authenticated via Google
  if (!session || !session.user?.email) {
    throw new Error("Unauthorized: You must be logged in to join as a musician.");
  }

  const instrument = formData.get("instrument") as string;
  const bio = formData.get("bio") as string;

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        instrument,
        bio,
        role: 'MUSICIAN',
      },
    });

    revalidatePath("/be-involved");
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Failed to update profile." };
  }
}