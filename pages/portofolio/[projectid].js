import { useRouter } from "next/router";

function PortofolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send request to some backend server
  // to fetch the piece of ata with an id of router.query.projectid

  



  return (
    <div>
      <h1>The Portofolio Project Page</h1>
    </div>
  );
}
export default PortofolioProjectPage;
