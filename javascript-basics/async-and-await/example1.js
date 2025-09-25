async function loadJson(url) {
  try {
    let response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

loadJson("https://javascript.info/no-such-user.json");
