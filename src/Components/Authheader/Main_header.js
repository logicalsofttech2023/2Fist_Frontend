import React, { useEffect } from 'react'
import secureLocalStorage from 'react-secure-storage'
import Coordinator_Header from '../../Coordinator_components/Coordinator_Header'
import Header from '../pages/Header'

const Main_header = () => {
    const coordinator_loginstatus = secureLocalStorage.getItem("coordinator_loginstatus");

    if (coordinator_loginstatus === true) {
        return <Coordinator_Header />;
    } else {
        return <Header />;
    }
}

export default Main_header