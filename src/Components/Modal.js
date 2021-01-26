import React, {Component} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

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

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

class Modal extends Component  {


    render() { 

        function bullets(bullets) {
            if (Array.isArray(bullets)) {
                return bullets.map(bullet => <React.Fragment> {bullet} <br></br> </React.Fragment>);
            }
            return bullets;
          }
      
        var setModal = this.props.setModal;
        var modal = this.props.modal;
        var description = modal.description;
        var content;
        const names = ["Technology", "Description", "Code", "Demo"];

        if(description) {
            content = Object.values(description).map((value, key) => { 
                return <div className="row">
                    <div className="one columns header-col">
                        <p> hi: </p>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                        <div className="one columns">
                             hello 
                        </div>
                        </div>
                    </div>
                </div>

            })
        }

        return (
            <section id="modal">
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
                            <CloseModalButton onClick={() => setModal(false, "", "", {})}> </CloseModalButton>
                            <b>{modal.title}</b>
                            {content} 
                            
                        
                            
                        </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            )
    }
}

export default Modal;

