function login(username: string): string {
    const user = {
        name: 'ram uppadhay',
    };
    const name = user['name'];
    return username + name;
}

login('sam');
