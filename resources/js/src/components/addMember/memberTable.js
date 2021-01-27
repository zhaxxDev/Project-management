import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    tablecell: {
        fontWeight: "bold"
    }
});

export default function BasicTable(props) {
    const [state, setState] = useState({
        checked: false
    });
    const handleClick = asd => {
        axios.get("/api/tickets").then(alert("Successfully Added!"));
    };
    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const classes = useStyles();
    const [rows, getRows] = useState([]);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablecell}>
                            Email
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            First Name
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            Last Name
                        </TableCell>

                        <TableCell className={classes.tablecell}>
                            Add as Manager?
                        </TableCell>
                        <TableCell className={classes.tablecell}>
                            Add Member
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.first_name} </TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label="Manager"
                                />
                            </TableCell>{" "}
                            <TableCell>
                                {" "}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => {
                                        handleClick(row.id);
                                    }}
                                    className="ml-5"
                                >
                                    ADD
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}