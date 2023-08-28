const Table = ({ children, className, ...props }) => {
  return (
    <table
      {...props}
      className={`${className} border-collapse border rounded overflow-hidden shadow-xl w-3/4`}
    >
      {children}
    </table>
  );
};

const Header = ({ children, className, ...props }) => {
  return (
    <thead {...props} className={`${className}  bg-royal-blue-400`}>
      {children}
    </thead>
  );
};
const Head = ({ children, className, ...props }) => {
  return (
    <th
      {...props}
      className={`${className} border border-royal-blue-500 text-white`}
    >
      {children}
    </th>
  );
};

const Body = ({ children, className, ...props }) => {
  return (
    <tbody {...props} className={`${className} bg-white `}>
      {children}
    </tbody>
  );
};

const Row = ({ children, className, ...props }) => {
  return (
    <tr {...props} className={`${className} `}>
      {children}
    </tr>
  );
};

const Data = ({ children, className, ...props }) => {
  return (
    <td
      {...props}
      className={`${className} text-black border border-royal-blue-400 px-2 text-md`}
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
