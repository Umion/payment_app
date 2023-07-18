// import { PaymentType, StatusType } from "../types";
import DepositIcon from "../assets/images/deposit.svg";
import PayoutIcon from "../assets/images/payout.svg";
import RefundIcon from "../assets/images/refund.svg";
import VisaIcon from "../assets/images/visaIcon.svg";
import MCIcon from "../assets/images/mcIcon.svg";

const tableIcons = {
  Deposit: DepositIcon,
  Payout: PayoutIcon,
  Refund: RefundIcon,
  VISA: VisaIcon,
  MC: MCIcon,
};

const statusColor = {
  Success: "#00D2C9",
  Decline: "#F25757",
  Processing: "#F2CD60",
};

export type TSIconsKeys = keyof typeof tableIcons;
export type TSColorsKeys = keyof typeof statusColor;

const getIconByKey = (key: TSIconsKeys) => {
  return tableIcons[key];
};

const getStatusColor = (key: TSColorsKeys) => {
  return statusColor[key];
};

export const renderDateCell = (date: string) => {
  return (
    <>
      <div>
        {new Date(date).toLocaleString("en-GB", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </div>
      <div>
        {new Date(date).toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </>
  );
};

export const renderTypeCell = (type: TSIconsKeys) => {
  return (
    <div className="d-flex align-items-center">
      <img className="me-1" src={getIconByKey(type)} />
      {type}
    </div>
  );
};

export const renderStatusCell = (status: TSColorsKeys) => {
  return (
    <div className="d-flex align-items-center">
      <span
        style={{
          width: "12px",
          height: "12px",
          background: getStatusColor(status),
          marginRight: "10px",
          borderRadius: "50%",
        }}
      />
      {status}
    </div>
  );
};

export const renderPaymentMethodCell = (type: TSIconsKeys) => {
  return <img src={getIconByKey(type)} />;
};
