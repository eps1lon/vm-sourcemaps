type Reason = string;

function doError(reason: Reason) {
  throw new Error(reason);
}

doError("Boom");
