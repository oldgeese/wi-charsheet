import { FC } from 'react';

import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

const ExitDialog: FC<{
    message: string;
    open: boolean;
    onConfirm: Function;
    onClose: Function;
}> = ({ open, onConfirm, onClose, message }) => {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog open={open} onClose={() => onClose()}>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>キャンセル</Button>
                <Button onClick={handleConfirm}>離れる</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ExitDialog;
