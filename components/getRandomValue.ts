"use server";
import {random} from "radash";

export default async function getRandomValue() {
    console.log(':la')
    return random(0, 100)
}
