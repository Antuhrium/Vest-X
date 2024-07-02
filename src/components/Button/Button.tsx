import React from 'react';

interface ButtonProps {
  type: 'forward' | 'back' | 'custom';
  onClick: () => void;
  customContent?: React.ReactNode;
  background?: 'negative' | 'positive' | 'transparent';
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  customContent,
  background = 'positive'
}) => {
  const getButtonContent = () => {
    switch (type) {
      case 'forward':
        return (
          <>
            Next Step
            <img src="/arrow-right.svg" alt="Next" style={{ transform: 'rotate(0deg)' }} />
          </>
        );
      case 'back':
        return (
          <>
            <img src="/arrow-right.svg" alt="Previous" style={{ transform: 'rotate(180deg)' }} />
            Previous Step
          </>
        );
      case 'custom':
        return customContent;
    }
  };

  const getBackgroundColor = () => {
    switch (background) {
      case 'positive':
        return '#0F62FE';
      case 'negative':
        return '#101322';
      case 'transparent':
        return 'transparent';
      default:
        return '#0F62FE';
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: getBackgroundColor(),
        //  color: background === 'transparent' ? 'inherit' : 'white',
        color: 'white',
        padding: "14px 24px",
        border: 'none',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        gap: '10px',
        cursor: 'pointer',
        width: "100%",
        height: "100%",
      }}
    >
      {getButtonContent()}
    </button>
  );
};

export default Button;

// always use outer div with height and weight
// <Button type="forward" onClick={() => console.log('Next')} background="positive" />
// <Button type="back" onClick={() => console.log('Back')} />
// <Button 
//   type="custom" 
//   customContent="Save and finish later" 
//   background="negative" 
//   onClick={() => console.log('Save')} 
// />
