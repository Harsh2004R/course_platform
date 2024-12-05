import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
function Test() {
  // Define the marquee animation
  const marquee = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(-100%); }
  `;

  return (
    <Box>
     
    </Box>
  );
}

export default Test;
