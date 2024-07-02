import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <p>This is landig page (unprotected)</p>
      <Link href = "/sign-in">
        <Button>
          login
        </Button>
      </Link>
      <Link href = "/sign-up">
        <Button>
          signup
        </Button>
      </Link>
    </div>
  );
}
