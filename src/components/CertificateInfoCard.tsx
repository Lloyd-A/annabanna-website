import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CertificateInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="max-w-150 text-lg px-2">
          The Team Jamaica certification represents a commitment to excellence
          in tourism and hospitality. This training program, offered by the
          prestigious Team Jamaica Foundation, enhances the knowledge,
          interpersonal skills, and attitude of tourism professionals to ensure
          the delivery of exceptional, high-quality service. As a certified Team
          Jamaica driver, AnnaBanna Tours guarantees a welcoming and memorable
          experience, showcasing the very best of Jamaican hospitality.
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
