import React from "react";
import { Button, ButtonExternal, Layout, Title, Flex, Text } from "@/components/core";
import { FaHeart } from "react-icons/fa";

export default function Home() {
    return (
        <main>
            <Layout className="items-center justify-center">
                <Flex className="flex-col gap-4 items-center justify-between">
                    <Title> Juego SOS </Title>
                    <Button
                        href="settings"
                        className="bg-gradient-to-r from-purple-500 to-pink-600 text-2xl md:text-4xl">
                        CLICK PARA JUGAR
                    </Button>
                    <Flex className="flex-row gap-2 items-center flex-wrap">
                        <Text>Diseñado con</Text>
                        <FaHeart className="text-red-500" /> by
                        <Text>
                            <strong>Jhonnatan ER.</strong>
                        </Text>
                    </Flex>
                    <Flex className="w-full flex-row gap-2 justify-end flex-wrap">
                        <ButtonExternal href="https://github.com/Jhonnatan1806">
                            Documentación &#8594;
                        </ButtonExternal>
                    </Flex>
                </Flex>
            </Layout>
        </main>
    );
}
