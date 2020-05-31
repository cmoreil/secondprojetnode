import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PostComment } from "../PostComment/PostComment.js";
import { FaCarrot } from "react-icons/fa";
import { GiSpade } from "react-icons/gi";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <GiSpade color="orange" size={25} onClick={handleClickOpen} /> <Button onClick={handleClickOpen}>Poster un commentaire</Button> <FaCarrot color="orange" size={25} onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Poster un commentaire</DialogTitle>
        <DialogContent>
            <PostComment />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}