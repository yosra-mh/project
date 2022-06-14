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
function Students() {
  const [studentsData, setstudentsData] = useState([
    {
      id: 1,
      parent: "Mark Smith",
      name: "Raj",
      parent: "David Beck",
      email: "Raj@gmail.com",
      phone: 7894561230,
      class: "1B5",
      gender: "M",
      state: "A",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5nywS57VWeUU5RdCwqsTKk2Y0N_-5jcUjHDeDrNoYuqTGnGjy3KF0KrlLBQf0sGyUOw&usqp=CAU",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 2,
      parent: "Lily collins",
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      class: "2C8",
      gender: "M",
      state: "I",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5nywS57VWeUU5RdCwqsTKk2Y0N_-5jcUjHDeDrNoYuqTGnGjy3KF0KrlLBQf0sGyUOw&usqp=CAU",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 3,
      parent: "Joe Biden",
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      class: "1B3",
      gender: "F",
      state: "A",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 4,
      parent: "Adam Delli",
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      class: "1D8",
      gender: "M",
      state: "I",
      img: "https://t4.ftcdn.net/jpg/03/03/11/97/360_F_303119721_EabYowCVsPMkCo7UMSGWx4Z2AvNkR7bV.jpg",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 5,
      parent: "Omar Rio",
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      class: "1B5",
      gender: "F",
      state: "A",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVY9t3YaFnmdMFYW9w83vNw4pVcnHTOJnhWw&usqp=CAU",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 6,
      parent: "Aleh Junior",
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      class: "1B5",
      gender: "M",
      state: "A",
      img: "https://t4.ftcdn.net/jpg/03/03/11/97/360_F_303119721_EabYowCVsPMkCo7UMSGWx4Z2AvNkR7bV.jpg",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 7,
      parent: "Doe Bee",
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      class: "2C8",
      gender: "F",
      state: "I",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6l0z5UCOZrwtjdTC0h0Rxq8ZeWGT1mN3vwm_F3VTDTEtw3jBXBnQxlWs19Xvaxyjc1E&usqp=CAU",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 8,
      parent: "Ayla Mey",
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      class: "1B9",
      gender: "M",
      state: "A",
      img: "https://thumbs.dreamstime.com/b/portrait-young-european-man-sad-face-expression-isolated-gray-background-portrait-young-european-man-white-shirt-120106324.jpg",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      id: 9,
      parent: "Dubby Bell",
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      class: "1C9",
      gender: "M",
      state: "I",
      img: "https://thumbs.dreamstime.com/b/close-up-portrait-nice-european-guy-stylish-haircut-curvy-smile-standing-against-gray-background-student-came-to-his-111187301.jpg",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      parent: "Emma Stone",
      id: 10,
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      class: "1C9",
      gender: "M",
      state: "A",
      img: "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      parent: "Mark Bee",
      id: 11,
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      class: "1B5",
      gender: "F",
      state: "I",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEeXeX12fQlHlhsnBXJB5uFW_gm1fVCy4oc8qYmFKbs1eUhDopt352m3nit6ZrO-n7KM&usqp=CAU",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
    {
      parent: "Done Bee",
      id: 12,
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      class: "1C9",
      gender: "M",
      state: "A",
      img: "https://media.istockphoto.com/photos/stylish-bearded-man-with-trendy-haircut-smiling-to-camera-having-picture-id1025855448?k=20&m=1025855448&s=612x612&w=0&h=ola6f7BMuKHHBOtqj6qLw1YGkkmYMzJs2QvFtEB-ZZs=",
      parentImg:
        "https://image.shutterstock.com/image-photo/young-blonde-man-260nw-195948575.jpg",
    },
  ]);
  const [selectedRows, setSelectedRows] = useState([]);

  const columns = [
    {
      title: "Name",
      field: "name",
      filterPlaceholder: "Filter",
      render: (rowData) => (
        <>
          <div style={{ display: "flex" }}>
            <img
              src={rowData.img}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginRight: "15px",
                border: "4px solid #E4E6EB",
              }}
            />

            {rowData.name}
          </div>
        </>
      ),
    },
    {
      title: "Parent",
      field: "parent",
      filterPlaceholder: "Filter",
      render: (rowData) => (
        <>
          <div style={{ display: "flex", width: "inherit" }}>
            <img
              src={rowData.parentImg}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                marginRight: "15px",
                border: "4px solid #E4E6EB",
              }}
            />

            {rowData.parent}
          </div>
        </>
      ),
    },
    { title: "Email", field: "email", filterPlaceholder: "Filter " },

    {
      title: "Gender",
      field: "gender",
      lookup: { M: "Male", F: "Female" },
      filterPlaceholder: "Filter",
    },
    { title: "class", field: "class", filterPlaceholder: "Filter" },
    {
      title: "State",
      field: "state",
      lookup: { A: "Active", I: "Inactive" },
      render: (rowData) => (
        <div
          style={{
            color: "#606770",
            width: "fit-content",
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
  const tableRef = React.createRef();

  const handleBulkDelete = () => {
    const updatedData = studentsData.filter(
      (row) => !selectedRows.includes(row)
    );
    setstudentsData(updatedData);
  };
  const exportAllSelectedRows = () => {
    new CsvBuilder("studentsData.csv")
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
        data={studentsData}
        tableRef={tableRef}
        icons={tableIcons}
        editable={{
          onRowAdd: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              setstudentsData([...studentsData, newRow]);
              setTimeout(() => resolve(), 500);
            }),

          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData2 = [...studentsData];
              updatedData2[oldRow.id - 1] = newRow;
              setstudentsData(updatedData2);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData3 = [...studentsData];
              console.log(selectedRow.id);
              updatedData3.splice(selectedRow.id - 1, 1);
              setstudentsData(updatedData3);
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
          exportFileName: "studentsData",
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
        title="Students List"
      />
    </div>
  );
}

export default Students;
