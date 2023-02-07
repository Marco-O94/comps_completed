import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  // Just for more reading space, I'm going to put the Modal component inside of a variable.
  const actionBar = (
    <Button primary onClick={handleClose}>
      Close Modal
    </Button>
  );
  const modal = <Modal onClose={handleClose} actionBar={actionBar}></Modal>;

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate
        quam quis ultricies pretium. Fusce facilisis dolor ante, vitae ornare
        velit dignissim non. Donec auctor nunc et ipsum congue, ac egestas mi
        consectetur. Morbi mi nisi, congue vel suscipit ut, fermentum et nisl.
        Curabitur pharetra vel sem malesuada rutrum. Duis rhoncus malesuada
        lectus vitae mollis. Aliquam erat volutpat.
      </p>
    </div>
  );
}

export default ModalPage;
