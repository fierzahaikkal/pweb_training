const Table = ({ children, className, ...props }) => {
  return (
    <table {...props} className={`${className} border border-royal-blue-300`}>
      {children}
    </table>
  );
};

const Header = ({ children, className, ...props }) => {
  return (
    <thead {...props} className={`${className} border border-royal-blue-300`}>
      {children}
    </thead>
  );
};
const Row = ({ children, className, ...props }) => {
  return (
    <tr {...props} className={`${className}`}>
      {children}
    </tr>
  );
};
const Head = ({ children, className, ...props }) => {
  return (
    <th
      {...props}
      className={`${className} text-royal-blue-50 border border-royal-blue-300`}
    >
      {children}
    </th>
  );
};

const Body = ({ children, className, ...props }) => {
  return (
    <tbody {...props} className={`${className}`}>
      {children}
    </tbody>
  );
};

const Data = ({ children, className, ...props }) => {
  return (
    <td
      {...props}
      className={`${className} text-royal-blue-50 border border-royal-blue-300`}
    >
      {children}
    </td>
  );
};

Table.Header = Header;
Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
Table.Data = Data;

export default Table;
