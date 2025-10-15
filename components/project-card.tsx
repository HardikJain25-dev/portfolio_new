import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  tags: string[];
  href?: string;
};

export function ProjectCard({
  title,
  description,
  tags,
  href,
  imageSrc,
  imageAlt,
}: Project) {
  return (
    <a href={href || "#"} className="group">
      <Card className="overflow-hidden bg-card/60 backdrop-blur border-border/60 hover:border-primary/50 transition-colors">
        <div className="relative aspect-[16/9]">
          <Image
            src={imageSrc || ""}
            alt={imageAlt || `${title} preview`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10 group-hover:ring-primary/30 transition" />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-pretty">{title}</h3>
          <p className="text-sm text-muted-foreground text-pretty">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="border-primary/30 text-foreground/80"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
}
