import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    const disallows = [
        "Amazonbot",
        "anthropic-ai",
        "Applebot-Extended",
        "AwarioRssBot",
        "AwarioSmartBot",
        "Bytespider",
        "CCBot",
        "ChatGPT-User",
        "ClaudeBot",
        "Claude-Web",
        "cohere-ai",
        "DataForSeoBot",
        "Diffbot",
        "FacebookBot",
        "FriendlyCrawler",
        "Google-CloudVertexBot",
        "Google-Extended",
        "GPTBot",
        "ImagesiftBot",
        "magpie-crawler",
        "Meta-ExternalAgent",
        "meta-externalagent",
        "NewsNow",
        "news-please",
        "OAI-SearchBot",
        "omgili",
        "omgilibot",
        "peer39_crawler",
        "peer39_crawler/1.0",
        "PerplexityBot",
        "Quora-Bot",
        "Scrapy",
        "TurnitinBot",
    ];

    return {
        rules: disallows.map((ua) => {
            return { userAgent: ua, disallow: "/" };
        }),
    };
}
