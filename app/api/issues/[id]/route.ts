import { NextRequest, NextResponse } from 'next/server';
import issueSchema from '../issueSchema';
import prisma from '@/prisma/client';
import { revalidatePath } from 'next/cache';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string; }; }
) {
  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!issue)
    return NextResponse.json({ error: 'Invalid issue.' }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description
    }
  });

  revalidatePath(`/issues/${issue.id}`);

  return NextResponse.json(updatedIssue);
}