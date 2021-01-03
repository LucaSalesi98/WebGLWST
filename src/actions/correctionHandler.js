//true is correct word, false is not correct

const CorrectionHandler = (status)=>{
    return {
        type: 'CORRECTION_STATUS_HANDLER',
        payload: status,
    }
}

export default CorrectionHandler