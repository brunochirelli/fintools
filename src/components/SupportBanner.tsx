import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function SupportBanner() {
  return (
    <>
      <div className="mt-auto p-4">
        <Card x-chunk="A card with a call to action">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button className="w-full" size="sm">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
