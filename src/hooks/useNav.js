import React from "react";
import { useNavigate } from "react-router-dom";

export const useNave = () => {
    const navigate = useNavigate();

    const goTo = path => navigate(path);

    return{ goTo}
}