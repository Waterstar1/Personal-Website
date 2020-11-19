import React, {Component} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
const modalStyle = {
    hidden: { y: "200px", opacity: 0 },
    visible: { 
        y: "200px", 
        opacity: 1,
        transition: { duration: .5, delay: .5 },
        scale: 1.5
    },
}


class Modal extends Component  {


    render() { 
        var setModal = this.props.setModal;
        var modal = this.props.modal;
        var description = modal.description;
        return (
        <AnimatePresence>
            { this.props.showModal && (
                <motion.div className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                <motion.div className="modalStyle"
                    variants={modalStyle}
                >
                    <p>{modal.title}</p>
                    <p>Technology: {description.technology} </p>
                    <p>Code: {description.code}</p>
                    <p>Demo: {description.demo}</p>
                    
                    
                    
                    <button onClick={() => setModal(false, "", {})}> Start Again </button>
                    
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        )
    }
}

export default Modal;

