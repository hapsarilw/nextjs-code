import { useRouter } from "next/router";

function CientProjectsPage() {
  const router = useRouter();
  /* access to concrete id value */
  console.log(router.query);
  return (
    <div>
      <h1>The Projects of a Given Client!</h1>
    </div>
  );
}

export default CientProjectsPage;
