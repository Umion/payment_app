import Table from "react-bootstrap/Table";
import {
  CellRenderModel,
  HeadersModel,
  HeadersRenderModel,
  ItemModel,
} from "../types/tableTypes";

type Props = {
  headers: HeadersModel[];
  items: ItemModel[];
  headerRender?: HeadersRenderModel;
  cellRender?: CellRenderModel;
};

function RestTable(props: Props) {
  const { headers = [], items = [], headerRender, cellRender } = props;

  const renderHeaderSlot = (header: HeadersModel, colIndex: number) => {
    const result = header.label;

    if (
      headerRender &&
      Object.prototype.hasOwnProperty.call(headerRender, `header_${header.key}`)
    ) {
      return headerRender[`header_${header.key}`]({ header, colIndex, result });
    }
    return result;
  };

  const renderCellSlot = (
    header: HeadersModel,
    item: ItemModel,
    colIndex: number,
    rowIndex: number
  ) => {
    const result = item[header.key];
    if (
      cellRender &&
      Object.prototype.hasOwnProperty.call(cellRender, `cell_${header.key}`)
    ) {
      return cellRender[`cell_${header.key}`]({
        header,
        item,
        colIndex,
        rowIndex,
        result,
      });
    }
    return result;
  };

  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          {headers.map((header, colIndex) => (
            <td valign="middle" key={header.key} style={{ fontSize: "12px" }}>
              {renderHeaderSlot(header, colIndex)}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, rowIndex) => (
          <tr key={item.id}>
            {headers.map((header, colIndex) => (
              <td key={header.key} valign="middle">
                <div style={{ whiteSpace: "nowrap" }}>
                  {renderCellSlot(header, item, colIndex, rowIndex)}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RestTable;
