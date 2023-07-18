import RestTable from "../components/RestTable";
import { headers, items } from "../utils/mockData";
import {
  Button,
  Tooltip,
  ButtonGroup,
  Pagination,
  OverlayTrigger,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useCallback, useState } from "react";
import {
  renderDateCell,
  renderTypeCell,
  renderStatusCell,
  TSIconsKeys,
  renderPaymentMethodCell,
  TSColorsKeys,
} from "../utils/tableHelper";
import { PaymentType } from "../types/tableTypes";

function DataTable() {
  const [paymentStatus, setPaymentStatus] = useState<string>("all");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log((e.target as HTMLButtonElement).value);
    setPaymentStatus((e.target as HTMLButtonElement).value);
  };

  const getButtonVariant = useCallback(
    (value: string) => {
      return value === paymentStatus ? "secondary" : "grey100";
    },
    [paymentStatus]
  );

  const CustomTooltip = () => {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-2">Tooltip message</Tooltip>}>
        {({ ref, ...triggerHandler }) => (
          <>
            <div className="tooltip__icon" {...triggerHandler} ref={ref}>
              ?
            </div>
          </>
        )}
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Container className="mb-3">
        <Row xs="auto" className="mb-3 align-items-center">
          <Col>
            <span className="me-3 payments__title">Payments</span>
          </Col>
          <Col className="payments__buttons">
            <Button variant="primary" className="ms-2">
              All payments
            </Button>
            <Button variant="grey100" className="ms-2">
              Create deposit
            </Button>
            <Button variant="grey100" className="ms-2">
              Create wirhdrawal
            </Button>
          </Col>
        </Row>
        <Row xs={1} md="auto">
          <Col className="mb-3 mb-md-0 filter__buttons">
            <ButtonGroup size="sm" onClick={handleClick}>
              <Button variant={getButtonVariant("all")} value="all">
                All payments
              </Button>
              <Button variant={getButtonVariant("success")} value="success">
                Success
              </Button>
              <Button variant={getButtonVariant("decline")} value="decline">
                Decline
              </Button>
              <Button variant={getButtonVariant("refund")} value="refund">
                Refund
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <div className="d-flex align-items-center">
              <CustomTooltip />
              <InputGroup size="sm">
                <InputGroup.Text id="btnGroupAddon">
                  Magic search
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <RestTable
          headers={headers}
          items={items}
          // headerRender={{
          //   header_id: (props) => <b>#{props.header.label}</b>,
          // }}
          cellRender={{
            cell_date_created: (props) =>
              renderDateCell(props.item.date_created),
            cell_date_finished: (props) =>
              renderDateCell(props.item.date_finished),
            cell_type: (props) =>
              renderTypeCell(props.item.type as PaymentType),
            cell_status: (props) =>
              renderStatusCell(props.item.status as TSColorsKeys),
            cell_payment_method: (props) =>
              renderPaymentMethodCell(props.item.payment_method as TSIconsKeys),
          }}
        />
        <Pagination size="sm">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </>
  );
}

export default DataTable;
