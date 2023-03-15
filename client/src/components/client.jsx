import { useQuery } from "@apollo/client";
import ClientRow from "./clientRow";
import Spinner from "./spinner";
import { GET_CLIENTS } from "../queries/clientQuery";

const Client = () => {
  const { data: clientData, loading, error } = useQuery(GET_CLIENTS);
  //    console.log("data", data.clients)

  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientData.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Client;
