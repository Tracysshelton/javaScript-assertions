test('#isNull, #isNotNull', function() {
  assert.isNull(
    null,
    'error description'
  );
  assert.isNotNull(1, '1 is not null');
});
