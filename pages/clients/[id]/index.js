import { useRouter } from "next/router";

function CientProjectsPage() {
  const router = useRouter();
  /* access to concrete id value */
  console.log(router.query);

  function loadProjectHandler(){
    // load data...
    router.push({
      pathname: 'clienrs/[id]/[clientprojectid]',
      query: { id: '1', clientprojectid: 'projecta' }
    })
  }

  return (
    <div>
      <h1>The Projects of a Given Client!</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default CientProjectsPage;
