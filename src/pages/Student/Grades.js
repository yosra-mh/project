import React, { useState } from "react";
import "../../styles/teachers.css";
import MaterialTable from "material-table";
import Add from "@material-ui/icons/Add";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { CsvBuilder } from "filefy";

const tableIcons = {
  Add: React.forwardRef((props, ref) => (
    <Add id="addIcon" {...props} ref={ref} />
  )),
  Check: React.forwardRef((props, ref) => (
    <Check id="check" {...props} ref={ref} />
  )),
  Clear: React.forwardRef((props, ref) => (
    <Clear id="clear" {...props} ref={ref} />
  )),
  Delete: React.forwardRef((props, ref) => (
    <DeleteOutline id="actions" {...props} ref={ref} />
  )),
  DetailPanel: React.forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: React.forwardRef((props, ref) => (
    <Edit id="actions" {...props} ref={ref} />
  )),
  Export: React.forwardRef((props, ref) => (
    <SaveAlt id="addExport" {...props} ref={ref} />
  )),
  Filter: React.forwardRef((props, ref) => <div></div>),
  FirstPage: React.forwardRef((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: React.forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: React.forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: React.forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: React.forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: React.forwardRef((props, ref) => (
    <Search id="search" {...props} ref={ref} />
  )),
  SortArrow: React.forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: React.forwardRef((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: React.forwardRef((props, ref) => (
    <ViewColumn id="ViewColumn" {...props} ref={ref} />
  )),
};
function Grades() {
  const [gradesData, setGradesData] = useState([
    { id: 1, subject: "Math", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 2, subject: "Art", ds: 17, exam: 15, oral: 12, score: 13.22 },
    { id: 3, subject: "Physics", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 4, subject: "Litterature", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 5, subject: "Algebra", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 6, subject: "Science", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 7, subject: "Biology", ds: 11, exam: 15, oral: 12, score: 13.22 },
    { id: 8, subject: "Chemistry", ds: 12, exam: 10, oral: 12, score: 11.22 },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    { title: "Subject", field: "subject", filtering: false },
    { title: "Ds", field: "ds", filtering: false },
    { title: "Exam", field: "exam", filtering: false },
    { title: "Oral", field: "oral", filtering: false },
    { title: "Score", field: "score", filtering: false },
  ];
  const tableRef = React.createRef();
  const exportAllSelectedRows = () => {
    new CsvBuilder("gradesData.csv")
      .setColumns(columns.map((col) => col.title))
      .addRows(
        selectedRows.map((rowData) => columns.map((col) => rowData[col.field]))
      )
      .exportFile();
  };
  return (
    <div className="s-layout__content " id="table">
      {" "}
      <MaterialTable
        columns={columns}
        data={gradesData}
        tableRef={tableRef}
        icons={tableIcons}
        actions={[
          {
            icon: () => <SaveAlt id="addExport" />,
            tooltip: "Export all selected rows",
            onClick: () => exportAllSelectedRows(),
          },
        ]}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "gradesData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: true,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            //disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true,
          exportButton: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "white" } : null,
          headerStyle: { background: "#0894F6", color: "#ffffff" },
          buttonStyle: { background: "#f2f2f2", color: "#ffffff" },
        }}
        title="Grades List"
      />
    </div>
  );
}

export default Grades;
