import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IdCard } from "lucide-react";
import TextTitle from "@/components/text-title";
import Link from "next/link";

const SectionService = () => {
  const services = [
    {
      title: "Pembuatan KK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam neque quae.",
      icon: <IdCard className="w-10" />,
      href: "/pembuatan-kk",
    },
    {
      title: "Pembuatan KTP",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam neque quae.",
      icon: <IdCard className="w-10" />,
      href: "/pembuatan-ktp",
    },
    {
      title: "Pembuatan Akta Kelahiran",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam neque quae.",
      icon: <IdCard className="w-10" />,
      href: "/pembuatan-akta",
    },
  ];

  return (
    <section className="flex flex-col gap-7 p-5 md:p-10">
      <TextTitle className="text-center">Layanan Kami</TextTitle>
      <div className="flex flex-col md:flex-row gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="cursor-pointer"
          >
            <Card className="flex gap-3 p-2 justify-center items-center hover:bg-accent">
              {service.icon}
              <CardHeader className="flex-1">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionService;
