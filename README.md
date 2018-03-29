Dpostools opensource db
===================

I've been approached by many individuals asking every day (at different hours) to update or add a pool to one or the other coin.
I tried to follow and make modifications as soon as they arrived but I failed badly hence this project.

----------

#### What is this

This contains the data used within the dpostools.com to do everything. Once i update one of the files included in this repo i would just need to rebundle the information in dpostools and deploy it in production.

#### How do i add one pool?

Please open an issue with the following subject pattern: `coin` - `delegate`.
When opening an issue it will automatically prompt a body template to fill

#### How do i update a pool share?

- Find if there is an issue (even closed one) for that delegate and coin. 
- If not, open a new issue (see above)
- add a comment to the issue specifying the new reward and if you're the pool operator or not.

#### I'm a developer. Can I use your data?

Yes At every master commit a travis build kicks in and generates JSON and JS data from the yaml source files. 
The artifacts are stored in the [artifacts](https://github.com/vekexasia/dpos-tools-data/tree/artifacts) branch and are accessible through `gitcdn`.

For example you can get the lisk `pools.json` by using `rawgit.com` services (here)[https://cdn.rawgit.com/vekexasia/dpos-tools-data/artifacts/lisk/pools.json]..


## Thanks

Updating and maintaining dpostools is time consuming. Consider donating me some coffee. 

 - **LISK**: 9102643396261850794L
 - **SHIFT**: 16159457535471071047S
 - **RISE**: 9857707766596718725R
