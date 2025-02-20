import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { URL } from "../../Bachend-URL's/Base.url.js";

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${URL}/user/all`);
                setUsersData(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Box p={4}>
            {loading && <Text>Loading...</Text>}
            {error && <Text color="red.500">{error}</Text>}
            {!loading && !error && usersData.length === 0 && (
                <Text>No users found.</Text>
            )}
            {usersData.map((user) => (
                <Box key={user._id} p={3} transition={"0.5s ease"} _hover={{ backgroundColor: "#E3F2FD" }} borderWidth="2.5px" borderRadius="lg" borderRight={"none"} borderLeft={"none"} borderTop={"none"} borderColor={"#81D4FA"} my={2}>
                    <Flex alignItems={"center"} alignContent={"center"}>
                        <Image boxSize="50px" src={user.profile_picture} alt={user.name} borderRadius={"50%"} mr="10px" />
                        <Text fontWeight="bold">{user.full_name}</Text>
                    </Flex>
                    <Text>Email: {user.email}</Text>
                    <Text>Contact: {user.contact_no}</Text>
                    <Text>Role: {user.role}</Text>
                    <Text>User Id: {user._id}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Users;
