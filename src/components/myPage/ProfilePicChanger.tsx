import { FC, useState } from 'react';

const ProfilePicChanger: FC<{
  handleImageChange: (image: string) => void;
  pic1: string;
  pic2: string;
  pic3: string;
}> = ({ handleImageChange, pic1, pic2, pic3 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const profileImages = [pic1, pic2, pic3];
  const imageMapper = profileImages.map((image, index) => {
    return (
      <img
        key={index}
        src={image}
        height="48px"
        onClick={() => handleImageChange(image)}
      />
    );
  });
  return (
    <div className="ProfilePicChanger">
      {/*  <Button type="primary" onClick={showModal}>
        Open Modal
     </Button>
      <Modal
        title="Profile Pic Changer Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {imageMapper}
      </Modal>
  */}
    </div>
  );
};

export default ProfilePicChanger;
