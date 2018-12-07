export const calculateAge = (dateOfBirth) => {
    return new Date().getFullYear() - parseInt(dateOfBirth.split('-')[0], 10);
}