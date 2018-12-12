import React from 'react';
import { Snackbar } from './Snackbar/index';
import './index.styl';

export const SnackbarContainer = ({ notifications, closeNotification }) => (
  <div
    className="snackbars hidden-for-print"
    style={{
      position: 'fixed',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      zIndex: 8046,
    }}
  >
    { notifications.length > 1 && (
      <a
        role="presentation"
        className="close-all"
        onClick={() => (notifications.forEach(notif => closeNotification(notif.uuid)))}
      >
        <span>Fermer tout <i className="fa fa-trash" /></span>
      </a>
    )}
    {
      notifications.map(notification => (
        <Snackbar
          key={notification.uuid}
          style={{
            position: 'relative',
            marginTop: 5,
            transform: 'none',
            left: 0,
          }}
          autoHideDuration={notification.autoClose}
          onClose={(_, reason) => reason !== 'clickaway' && closeNotification(notification.uuid)}
          SnackbarContentProps={{
            'aria-describedby': notification.uuid,
          }}
          message={<span>{notification.messsage}</span>}
        />))
    }
  </div>
);
