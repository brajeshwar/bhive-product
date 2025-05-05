# Rooms Add

<a href="/images/meetings/web/rooms-add.png" target="_blank"><img src="/images/meetings/web/rooms-add.png" alt="" loading="lazy"></a>

A user with Room Addition Rights can add a Room.

Meeting Rooms are added via the "Add Room" button individually (default and future behavior) or via a `Bulk Import` from a CSV file extracted from our current existing tool, `Skeeda` or from a Spreadsheet template.

As outlined in the UI Design above, the fields are either selection options, text field, checkboxes, and file upload options.

- Validate the forms as necessary. (Why are we even writing this part — validate forms where needed is a standard process.)
- Populate pre-existing data from the database, if they exist.
- On Submission, user can either set it as `Available` or `Not Available`. When set to `Not Available`, the Room is created but is not available to book.