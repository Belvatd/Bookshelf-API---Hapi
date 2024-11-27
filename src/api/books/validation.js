const validateBookPayload = (payload, action) => {
  const { name, pageCount, readPage } = payload;

  if (!name) {
    return {
      isValid: false,
      error: {
        statusCode: 400,
        message: `Gagal ${action} buku. Mohon isi nama buku`,
      },
    };
  }

  if (readPage > pageCount) {
    return {
      isValid: false,
      error: {
        statusCode: 400,
        message: `Gagal ${action} buku. readPage tidak boleh lebih besar dari pageCount`,
      },
    };
  }

  return { isValid: true };
};

module.exports = { validateBookPayload };
