import Page from "../page";

const DocktorsList = async (props: {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const searchParams = props.searchParams || {};
  const params = await props.params;
  const id = params.id;
  return (
    <div>
      <Page searchParams={Promise.resolve(searchParams)} slug={encodeURI(id)} />
    </div>
  );
};

export default DocktorsList;
