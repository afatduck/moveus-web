function enumToOptions <E extends Record<string, string>>(enumObj: E): Option<string>[] {
  const values = Object.values(enumObj);

  return values.map(value => {
    return {
      value,
      name: value.charAt(0) + value.slice(1).toLowerCase().replaceAll("_", " ")
    }
  })
}

export { enumToOptions }