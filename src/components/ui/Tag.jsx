import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({children, ...props}) => {
    return (
        <CTag
         p="1.5"
         margin="0.5"
         size="sm"
         variant="solid"
         color="black"
         textTransform="uppercase"
         {...props}
        >
            {children}
        </CTag>
    );
};