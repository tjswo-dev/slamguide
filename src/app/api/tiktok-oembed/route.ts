import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoUrl = searchParams.get("url");
  if (!videoUrl) return NextResponse.json({ error: "Missing url" }, { status: 400 });

  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) throw new Error(`oEmbed ${res.status}`);
    const data = await res.json();
    return NextResponse.json({
      thumbnailUrl: data.thumbnail_url as string,
      title: data.title as string,
      authorName: data.author_name as string,
    });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
