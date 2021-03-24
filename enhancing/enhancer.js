module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100")
  }

  if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("enhancement must be between 0 and 20")
  }

  if (item.enhancement === 20) {
    return { ...item };
  }
  return {
    ...item,
    enhancement: item.enhancement + 1
  }
}

function fail(item) {
  if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100")
  }

  if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("enhancement must be between 0 and 20")
  }

  if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    }
  }

  if (item.enhancement === 15 || item.enhancement === 16) {
    return {
      ...item,
      durability: item.durability - 10
    }
  }

  if (item.enhancement > 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    }
  }
}

function repair(item) {
  if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100")
  }

  if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("enhancement must be between 0 and 20")
  }

  return {
    ...item,
    durability: 100
  };
}

function get(item) {
  if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100")
  }

  if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("enhancement must be between 0 and 20")
  }

  if (item.enhancement === 0) {
    return { ...item }
  }

  if (item.enhancement > 0) {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`
    }
  }
}
