import { ChangeEvent } from 'react';

const handleChange = (e: ChangeEvent<HTMLInputElement>, formData: any, setFormData: (data: any) => void) => {
    const { name, value, type } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'number' ? parseInt(value) : value,
    });
};

export default handleChange;