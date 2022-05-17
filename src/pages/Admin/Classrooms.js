import React, { useState } from "react";
import "../../styles/teachers.css";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import Add from "@material-ui/icons/Add";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef } from "react";
import AttachFile from "@material-ui/icons/AttachFile";
import { CsvBuilder } from "filefy";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { Button, Container, IconButton } from "@material-ui/core";
import { DropzoneDialogBase } from "material-ui-dropzone";
import CloseIcon from "@material-ui/icons/Close";

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

export default function Classrooms() {
  const [classroomsData, setclassroomsData] = useState([
    {
      id: 1,
      class: "1B5",
      state: "A",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5nywS57VWeUU5RdCwqsTKk2Y0N_-5jcUjHDeDrNoYuqTGnGjy3KF0KrlLBQf0sGyUOw&usqp=CAU",
    },
    {
      id: 2,
      class: "1B8",
      state: "I",
    },
    {
      id: 3,
      class: "1C5",
      state: "A",
    },
    {
      id: 4,
      class: "1B3",
      state: "I",
    },
    {
      id: 5,
      class: "1B4",
      state: "A",
    },
    {
      id: 6,
      class: "1B8",
      state: "A",
    },
    {
      id: 7,
      class: "1B2",
      state: "I",
    },
    {
      id: 8,
      class: "1B1",
      state: "I",
    },
    {
      id: 9,
      class: "1B7",
      state: "A",
    },
    {
      id: 10,
      class: "1C1",
      state: "I",
    },
    {
      id: 11,
      class: "1C2",
      state: "I",
    },
    {
      id: 12,
      class: "1C6",
      state: "A",
    },
  ]);
  const [open, setOpen] = useState(false);
  const FILES_LIMIT = 1;
  const pageSize = [10, 20, 50, 100];
  const [selectedRows, setSelectedRows] = useState([]);
  const [image, setImage] = useState([]);

  const dialogTitle = () => (
    <>
      <span>Upload file</span>
      <IconButton
        style={{ right: "12px", top: "8px", position: "absolute" }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  const columns = [
    {
      field: "img",
      title: "Schedule",
      filtering: false,
      render: (rowData) => (
        <h5 id="Attachement">
          <AttachFile /> {rowData.img}{" "}
        </h5>
      ),
      editComponent: () => (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {"Add image"}
        </Button>
      ),
    },
    {
      title: "Class",
      field: "class",
      filtering: true,
    },

    {
      title: "State",
      field: "state",
      lookup: { A: "Active", I: "Inactive" },
      render: (rowData) => (
        <div
          style={{
            color: "#606770",
          }}
          key={rowData.id}
        >
          <span
            style={{
              color: rowData.state == "A" ? "#2EF53B" : "#F3495C",
              borderRadius: "4px",
              paddingLeft: 5,
              marginRight: "10px",
              width: "fit-content",
            }}
          >
            ●
          </span>
          {rowData.state == "A" ? "Active" : "Inactive"}
        </div>
      ),
      searchable: false,
      export: false,
      filterPlaceholder: "Filter",
    },
  ];
  const tableRef2 = React.createRef();

  const handleBulkDelete = () => {
    const updatedData = classroomsData.filter(
      (row) => !selectedRows.includes(row)
    );
    setclassroomsData(updatedData);
  };
  const exportAllSelectedRows = () => {
    new CsvBuilder("classroomsData.csv")
      .setColumns(columns.map((col) => col.title))
      .addRows(
        selectedRows.map((rowData) => columns.map((col) => rowData[col.field]))
      )
      .exportFile();
  };
  return (
    <div className="s-layout__content" id="table">
      <MaterialTable
        columns={columns}
        data={classroomsData}
        tableRef={tableRef2}
        icons={tableIcons}
        editable={{
          onRowAdd: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              setclassroomsData([...classroomsData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData4 = [...classroomsData];
              console.log(oldRow);
              updatedData4[oldRow.id - 1] = newRow;
              setclassroomsData(updatedData4);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData5 = [...classroomsData];
              updatedData5.splice(selectedRow.id - 1, 1);
              setclassroomsData(updatedData5);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: "delete",
            iconProps: {
              style: {
                borderRadius: "50%",
                background: "#f7d31d",
                color: "white",
                width: "32px",
                height: "32px",
                padding: "4px 4px",
              },
            },

            tooltip: "Delete all selected rows",
            onClick: () => handleBulkDelete(),
            iconProps: {
              style: {
                borderRadius: "50%",
                background: "#f3495c",
                color: "white",
                width: "32px",
                height: "32px",
                padding: "4px 4px",
              },
            },
          },
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
          exportFileName: "classroomsData",
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
        title="Classrooms List"
      />
      <DropzoneDialogBase
        dialogTitle={dialogTitle()}
        acceptedFiles={["image/*"]}
        fileObjects={image}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        filesLimit={FILES_LIMIT}
        open={open}
        onAdd={(newFileObjs) => {
          setImage([].concat([], newFileObjs));
        }}
        onDelete={(deleteFileObj) => {
          setImage(image.filter((item) => item !== deleteFileObj));
        }}
        onClose={() => setOpen(false)}
        onSave={() => {
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </div>
  );
}
