import Row from "./Row";

const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody> {Array.isArray(items)?
          items.map((item) => (
            <Row key={item.id} item={item} />
          )):null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
